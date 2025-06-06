import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Translations } from '../utils/translations';

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  t: Translations;
}

export const VideoPopup: React.FC<VideoPopupProps> = ({ isOpen, onClose, videoUrl, t }) => {

  if (!isOpen) return null;

  const getVideoType = (url: string): string | undefined => {
    if (url.endsWith('.mp4')) return 'video/mp4';
    if (url.endsWith('.webm')) return 'video/webm';
    if (url.endsWith('.ogg')) return 'video/ogg';
    return undefined;
  }
  const videoType = getVideoType(videoUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // <-- Cierra al hacer clic en el overlay
        >
          <motion.div
            className="overflow-hidden relative w-full max-w-4xl rounded-lg border shadow-xl bg-surface/90 border-border"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            onClick={(e) => e.stopPropagation()} // <-- Previene cierre al hacer clic DENTRO del modal
          >
            {/* Botón X ELIMINADO */}
            <div className="relative w-full aspect-video bg-black">
              <video
                className="absolute inset-0 w-full h-full"
                controls
                controlsList="nodownload"
                autoPlay={false}
                playsInline
                muted
                preload="metadata"
                title={t.projects.video || "Project Video"}
              >
                <source src={videoUrl} type={videoType || 'video/mp4'} />
                {t.projects.videoNotSupported}
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface CodeNotAvailablePopupProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translations;
}

export const CodeNotAvailablePopup: React.FC<CodeNotAvailablePopupProps> = ({ isOpen, onClose, t }) => {

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // <-- Cierra al hacer clic en el overlay
        >
          <motion.div
            className="overflow-hidden relative p-6 w-full max-w-md rounded-lg border shadow-xl bg-surface/90 border-border"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            onClick={(e) => e.stopPropagation()} // <-- Previene cierre al hacer clic DENTRO del modal
          >
             {/* Botón X ELIMINADO */}
            <div className="pt-4 text-center">
              <h3 className="mb-4 text-xl font-bold text-text-primary">
                {t.projects.codeNotAvailable}
              </h3>
              <p className="mb-6 text-text-secondary">
                 {t.projects.error}
              </p>
              <button
                className="px-5 py-2.5 font-medium rounded-lg border transition-colors duration-200 text-white bg-accent border-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-light"
                onClick={onClose} // El botón principal también cierra el popup
              >
                {t.projects.closeButton}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface ImagePopupProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText?: string; // Alt text opcional, pero recomendado
  t?: Translations; // Agregamos translations opcional
}

export const ImagePopup: React.FC<ImagePopupProps> = ({ isOpen, onClose, imageUrl, altText, t }) => {

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Cierra al hacer clic en el overlay
        >
          <motion.div
            className="overflow-hidden relative p-2 max-w-3xl max-h-[85vh] rounded-lg border shadow-xl bg-surface/90 border-border" // Ajusta max-w/max-h según necesites
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            onClick={(e) => e.stopPropagation()} // Previene cierre al hacer clic DENTRO del modal
          >
            {/* Imagen */}
            <img
              src={imageUrl}
              alt={altText || t?.projects.imagePreview || 'Project Preview'} // Usa altText, traducción o default
              className="block object-contain w-auto h-auto max-w-full max-h-[calc(85vh-1rem)]" // Asegura que la imagen quepa y mantenga aspecto
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};