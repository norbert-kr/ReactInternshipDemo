import { useState } from 'react';
import './Modal.scss';

export function Modal({show, title, children}){


    return  show ? (

        <div className='ModalOverlay'>
            <div className='ModalPane'>
                <header>
                    <p>{title}</p>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </div> 
        
        ) : null;

}

export function useModal(isOpen, initialContent=null){

    // State           | --------------------------------
    const [state, setState] = useState({show: isOpen, content: initialContent});


    // Handlers        | --------------------------------
    const open = (content) => setState({show: true, content}); 
    const close = () => setState({...state, show: false});

    return [state.show, state.content, open, close];
}

