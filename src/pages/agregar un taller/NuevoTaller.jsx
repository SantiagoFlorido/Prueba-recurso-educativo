import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

const NuevoTaller = () => {
    const navigate = useNavigate();
    const [playClick] = useSound(
        'https://res.cloudinary.com/dufzsv87k/video/upload/v1744909247/ClickSound.mp3',
        { volume: 1.0 }
    );
    const [titulo, setTitulo] = useState('');
    const [imagenPortada, setImagenPortada] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [duracion, setDuracion] = useState('');
    const [materiales, setMateriales] = useState('');
    const [nivelDificultad, setNivelDificultad] = useState('FÁCIL');
    const [objetivos, setObjetivos] = useState('');
    const [finalidades, setFinalidades] = useState('');
    const [ciencia, setCiencia] = useState('');
    const [tecnologia, setTecnologia] = useState('');
    const [ingenieria, setIngenieria] = useState('');
    const [matematicas, setMatematicas] = useState('');
    const [slides, setSlides] = useState([{ descripcion: '', imagen: null, preview: null }]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleNavigationWithSound = (path) => {
        playClick();
        setTimeout(() => {
            navigate(path);
        }, 200);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                showError('La imagen excede el tamaño máximo de 10MB');
                return;
            }
            setImagenPortada(file);
            setPreviewUrl(URL.createObjectURL(file));
            setError('');
        }
    };

    const handleSlideImageChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                showError(`La imagen del slide ${index + 1} excede 10MB`);
                return;
            }
            const newSlides = [...slides];
            newSlides[index].imagen = file;
            newSlides[index].preview = URL.createObjectURL(file);
            setSlides(newSlides);
            setError('');
        }
    };

    const handleSlideDescripcionChange = (index, e) => {
        const newSlides = [...slides];
        newSlides[index].descripcion = e.target.value;
        setSlides(newSlides);
    };

    const addNewSlide = () => {
        playClick();
        setSlides([...slides, { descripcion: '', imagen: null, preview: null }]);
    };

    const removeSlide = (index) => {
        playClick();
        if (slides.length > 1) {
            const newSlides = slides.filter((_, i) => i !== index);
            setSlides(newSlides);
        }
    };

    const showError = (message) => {
        setError(message);
        alert(`Error: ${message}`);
    };

    const showSuccess = (message) => {
        alert(message);
    };

    const validateForm = () => {
        if (!titulo.trim()) {
            showError('El título es obligatorio');
            return false;
        }
        if (!descripcion.trim()) {
            showError('La descripción es obligatoria');
            return false;
        }
        if (!imagenPortada) {
            showError('La imagen de portada es obligatoria');
            return false;
        }
        if (!duracion.trim()) {
            showError('La duración es obligatoria');
            return false;
        }
        if (!materiales.trim()) {
            showError('Los materiales necesarios son obligatorios');
            return false;
        }
        if (!objetivos.trim()) {
            showError('Los objetivos de aprendizaje son obligatorios');
            return false;
        }
        if (!finalidades.trim()) {
            showError('Las finalidades son obligatorias');
            return false;
        }

        // Validar slides
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            if (!slide.descripcion.trim()) {
                showError(`La descripción del paso en el slide ${i + 1} es obligatoria`);
                return false;
            }
            if (!slide.imagen) {
                showError(`La imagen del paso en el slide ${i + 1} es obligatoria`);
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async () => {
        playClick();
        setError('');
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // 1. Crear el taller
            const formDataTaller = new FormData();
            formDataTaller.append('nombre', titulo.trim());
            formDataTaller.append('descripcion', descripcion.trim());
            formDataTaller.append('portada', imagenPortada);
            formDataTaller.append('duracion', duracion.trim());
            formDataTaller.append('nivelDificultad', nivelDificultad);
            formDataTaller.append('materiales', materiales.trim());
            formDataTaller.append('objetivos', objetivos.trim());
            formDataTaller.append('finalidades', finalidades.trim());
            
            // Campos opcionales STEAM
            if (ciencia.trim()) formDataTaller.append('ciencia', ciencia.trim());
            if (tecnologia.trim()) formDataTaller.append('tecnologia', tecnologia.trim());
            if (ingenieria.trim()) formDataTaller.append('ingenieria', ingenieria.trim());
            if (matematicas.trim()) formDataTaller.append('matematicas', matematicas.trim());

            const tallerResponse = await fetch('https://api-aws-ndou.onrender.com/talleres', {
                method: 'POST',
                body: formDataTaller
            });

            if (!tallerResponse.ok) {
                const errorData = await tallerResponse.json().catch(() => ({}));
                throw new Error(errorData.error || 'Error al crear el taller');
            }

            const tallerData = await tallerResponse.json();
            
            if (!tallerData.id) {
                throw new Error('No se recibió ID del taller válido');
            }

            // 2. Agregar slides
            for (const slide of slides) {
                const formDataSlide = new FormData();
                formDataSlide.append('descripcion', slide.descripcion.trim());
                formDataSlide.append('imagen', slide.imagen);

                const slideResponse = await fetch(
                    `https://api-aws-ndou.onrender.com/talleres/${tallerData.id}/slides`,
                    {
                        method: 'POST',
                        body: formDataSlide
                    }
                );

                if (!slideResponse.ok) {
                    console.error('Error al crear slide:', await slideResponse.text());
                }
            }

            showSuccess('Taller creado exitosamente!');
            handleNavigationWithSound('/Proyectos');
        } catch (error) {
            console.error('Error completo:', error);
            showError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const sundclick = () => {
        playClick();
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="fixed top-4 left-4">
                <button 
                    onClick={() => handleNavigationWithSound('/Proyectos')}
                    className="bg-[#007B3E] hover:bg-[#009e4f] text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow-md"
                >
                    Regresar
                </button>
            </div>
            
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="w-full max-w-4xl">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center mt-16 md:mt-0">
                        Crear Nuevo Taller
                    </h1>
                    <p className="text-sm text-gray-500 mb-6 text-center">
                        Todos los campos son obligatorios, excepto en las áreas STEM. Además, las imágenes, GIFs o videos no deben superar los 10 MB
                    </p>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-200">
                            {error}
                        </div>
                    )}

                    <div className="border rounded-lg overflow-hidden bg-white shadow-lg mb-6">
                        <div className="h-12 flex items-center justify-center bg-[#007B3E] text-white">
                            <input
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                placeholder="Título del taller"
                                onClick={sundclick}
                                className="w-full bg-transparent text-center placeholder-white placeholder-opacity-70 focus:outline-none text-xl font-semibold px-4"
                                required
                            />
                        </div>
                        
                        <div className="h-90 flex flex-col items-center justify-center border-b">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="Vista previa portada"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="text-gray-500 text-center p-4">
                                    <p>Imagen de portada del taller</p>
                                    <label className="mt-4 cursor-pointer bg-[#007B3E] hover:bg-[#009e4f] text-white px-4 py-2 rounded-lg inline-block" onClick={sundclick}>
                                        Seleccionar imagen
                                        <input
                                            type="file"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            className="hidden"
                                            required
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <h2 className="text-xl font-bold mb-4 text-[#007B3E]">Descripción del Taller</h2>
                        <textarea
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            onClick={sundclick}
                            placeholder="Describe el taller, su propósito y lo que los estudiantes aprenderán..."
                            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E] mb-4"
                            required
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Duración</label>
                                <input
                                    type="text"
                                    value={duracion}
                                    onChange={(e) => setDuracion(e.target.value)}
                                    onClick={sundclick}
                                    placeholder="Ej: 60 minutos"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Nivel de dificultad</label>
                                <select
                                    value={nivelDificultad}
                                    onChange={(e) => setNivelDificultad(e.target.value)}
                                    onClick={sundclick}
                                    className="cursor-pointer w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                >
                                    <option value="FÁCIL">FÁCIL</option>
                                    <option value="INTERMEDIO">INTERMEDIO</option>
                                    <option value="DIFÍCIL">DIFÍCIL</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 mb-2">Materiales necesarios</label>
                            <textarea
                                value={materiales}
                                onChange={(e) => setMateriales(e.target.value)}
                                onClick={sundclick}
                                placeholder="Lista los materiales necesarios."
                                className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                required
                            />
                            <p className="text-sm text-gray-500 mt-1">Separa cada material con un salto de línea</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 mb-2">Objetivos de aprendizaje</label>
                            <textarea
                                value={objetivos}
                                onChange={(e) => setObjetivos(e.target.value)}
                                onClick={sundclick}
                                placeholder="Enumera los objetivos que los estudiantes alcanzarán"
                                className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                required
                            />
                            <p className="text-sm text-gray-500 mt-1">Separa cada objetivo con un salto de línea</p>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 mb-2">Finalidades</label>
                            <textarea
                                value={finalidades}
                                onChange={(e) => setFinalidades(e.target.value)}
                                onClick={sundclick}
                                placeholder="Describe las finalidades del taller..."
                                className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                required
                            />
                            <p className="text-sm text-gray-500 mt-1">Separa cada finalidad con un salto de línea</p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2 text-[#007B3E]">
                                Áreas STEM <span className="text-red-500">(No todas son obligatorias)</span>
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Ciencia</label>
                                    <textarea
                                        value={ciencia}
                                        onChange={(e) => setCiencia(e.target.value)}
                                        onClick={sundclick}
                                        placeholder="Relación con la ciencia..."
                                        className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 mb-2">Tecnología</label>
                                    <textarea
                                        value={tecnologia}
                                        onChange={(e) => setTecnologia(e.target.value)}
                                        onClick={sundclick}
                                        placeholder="Relación con la tecnología..."
                                        className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 mb-2">Ingeniería</label>
                                    <textarea
                                        value={ingenieria}
                                        onChange={(e) => setIngenieria(e.target.value)}
                                        onClick={sundclick}
                                        placeholder="Relación con la ingeniería..."
                                        className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-700 mb-2">Matemáticas</label>
                                    <textarea
                                        value={matematicas}
                                        onChange={(e) => setMatematicas(e.target.value)}
                                        onClick={sundclick}
                                        placeholder="Relación con las matemáticas..."
                                        className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-[#007B3E]">Slides del Taller</h2>
                            <button
                                type="button"
                                onClick={addNewSlide}
                                className="bg-[#007B3E] hover:bg-[#009e4f] text-white font-medium py-2 px-4 rounded-lg transition duration-200 shadow-md cursor-pointer"
                            >
                                Agregar Slide
                            </button>
                        </div>

                        {slides.map((slide, index) => (
                            <div key={index} className="mb-6 border border-gray-200 rounded-lg p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold text-gray-700">Slide {index + 1}</h3>
                                    {slides.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeSlide(index)}
                                            className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                                        >
                                            Eliminar
                                        </button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Descripción del paso</label>
                                        <textarea
                                            value={slide.descripcion}
                                            onChange={(e) => handleSlideDescripcionChange(index, e)}
                                            onClick={sundclick}
                                            placeholder="Describe este paso del taller..."
                                            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007B3E]"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">Imagen del paso</label>
                                        <div className="h-64 border border-gray-300 rounded-md flex flex-col items-center justify-center">
                                            {slide.preview ? (
                                                <img
                                                    src={slide.preview}
                                                    alt={`Vista previa slide ${index + 1}`}
                                                    className="w-full h-full object-contain"
                                                />
                                            ) : (
                                                <div className="text-center p-4">
                                                    <label className="cursor-pointer bg-[#007B3E] hover:bg-[#009e4f] text-white px-4 py-2 rounded-lg inline-block">
                                                        Seleccionar imagen
                                                        <input
                                                            type="file"
                                                            onChange={(e) => handleSlideImageChange(index, e)}
                                                            onClick={sundclick}
                                                            accept="image/*"
                                                            className="hidden"
                                                            required
                                                        />
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-6 mb-10">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`w-full max-w-md cursor-pointer ${
                                isSubmitting 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-[#007B3E] hover:bg-[#009e4f]'
                            } text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md`}
                        >
                            {isSubmitting ? 'Guardando...' : 'Guardar Taller'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NuevoTaller;