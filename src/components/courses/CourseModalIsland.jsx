import React, { useState, useImperativeHandle, forwardRef } from "react";
import CourseModal from "./CourseModal.jsx";

const CourseModalIsland = forwardRef(({ courses }, ref) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    useImperativeHandle(ref, () => ({
        openModal: (courseId) => {
            const course = courses.find((c) => c.id === courseId) || null;
            setSelected(course);
            setOpen(true);
        },
        closeModal: () => {
            setOpen(false);
            setSelected(null);
        },
    }));

    return (
        <CourseModal
            course={selected}
            open={open}
            onClose={() => setOpen(false)}
        />
    );
});

export default CourseModalIsland;
