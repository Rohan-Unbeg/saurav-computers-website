import React, { useEffect, useRef } from "react";

export default function CourseModal({ course, open, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            modalRef.current?.focus();
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") onClose();
        }
        if (open) {
            window.addEventListener("keydown", handleKeyDown);
            return () => window.removeEventListener("keydown", handleKeyDown);
        }
    }, [open, onClose]);

    if (!open || !course) return null;

    const {
        title,
        imageUrl,
        details,
        duration,
        level,
        category,
        outcomes,
        syllabus,
    } = course;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
                tabIndex={-1}
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                aria-modal="true"
                role="dialog"
            >
                <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-indigo-600 text-2xl font-bold focus:outline-none"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs font-medium">
                            {level}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium">
                            {duration}
                        </span>
                        <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">
                            {category}
                        </span>
                    </div>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        {details?.about}
                    </p>
                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Instructor:
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            {details?.instructor}
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Prerequisites:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            {details?.prerequisites?.map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            Highlights:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            {details?.highlights?.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                    </div>
                    {syllabus && (
                        <div className="mb-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                Syllabus:
                            </h3>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                {syllabus.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="mb-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            You'll Learn:
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                            {outcomes?.map((o, i) => (
                                <li key={i}>{o}</li>
                            ))}
                        </ul>
                    </div>
                    {details?.faq && details.faq.length > 0 && (
                        <div className="mb-4">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                FAQs:
                            </h3>
                            <ul className="space-y-2">
                                {details.faq.map((f, i) => (
                                    <li key={i}>
                                        <span className="font-medium text-indigo-700 dark:text-indigo-300">
                                            Q: {f.question}
                                        </span>
                                        <br />
                                        <span className="text-gray-700 dark:text-gray-300">
                                            A: {f.answer}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
