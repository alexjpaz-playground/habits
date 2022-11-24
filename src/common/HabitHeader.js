import { useState } from "react"
import { Breadcrumbs } from "./Breadcrumbs"

export function HabitDescriptionModal({ children, showModal = false, setShowModal = () => {}}) {

    const closeModal = (e) => {
        e.stopPropagation();
        setShowModal(false);
    };

    return (
        <div className={`modal ${showModal ? "is-active": ""}`}>
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">What is this habit?</p>
                    <button className="delete" aria-label="close" onClick={closeModal}></button>
                </header>
                <section className="modal-card-body">
                    { children }
                </section>
                <footer className="modal-card-foot">
                    <button className="button" onClick={closeModal}>Cancel</button>
                </footer>
            </div>
        </div>
    );
}

export function HabitHeader({ title, path, description }) {

    const [ showModal, setShowModal ] = useState(false);

    const onClick = () => {
        setShowModal(s => !s);
    };

    return (
        <div>
            <h1 className="title">
                <span>{title} Habit </span>
                
                <div className="is-pulled-right has-text-grey-light" onClick={onClick}>
                    <span className="icon">
                        <i className="fas fa-circle-question"></i>
                    </span>
                </div>
            </h1>
            <Breadcrumbs title={title} path={path} />
            <HabitDescriptionModal setShowModal={setShowModal} showModal={showModal}>
                <p className='content'>{ description }</p>
            </HabitDescriptionModal>
            <hr />
        </div>
    )
}