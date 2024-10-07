import React, { useState } from 'react';
import './App.css';
import Block from './Div/Block';
import Modal from './Components/Modal';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';
import Footer from './Components/Footer';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const addItem = () => {
    if (inputValue) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const removeItem = (item) => {
    setItems(items.filter(i => i !== item));
  };


  const [NoneVisible, setVisible] = useState(false)
 

  return (
    <div>
    <Block>
      <div>
      <p>Hello</p>
      </div>
      <div>
      <p>Hello</p>
      </div>
      <button onClick={openModal}>Відкрити модальне вікно</button>
      <Modal isOpen={isOpen} isClosed={closeModal} ></Modal>
      <br></br>
      <div className='app'>
      <button onClick={() => setVisible(!NoneVisible)}>{NoneVisible ? "зактрити" : "Відкрити"}</button>
      
        <div className='wrap'>
        <Transition
        in={NoneVisible}
        timeout={500}
        mountOnEnter
        unmountOnExit
        
        >
          {state => <div className={`circle ${state}`}></div>}
        </Transition>
         
        </div>

      </div>
      <div className="dropshipping">
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Введите элемент" 
      />
      <button onClick={addItem}>Добавить</button>

      <TransitionGroup>
        {items.map(item => (
          <CSSTransition key={item} timeout={300} classNames="fade">
            <div className="item" onClick={() => removeItem(item)}>
              {item}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
    <div>

    </div>
    </Block>
    <Footer/>
    </div>
  );
}

export default App;
