
import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';



function Nav() {
    const  categories = [
      { name: 'TK', description: 'TK' },
      { name: 'TK II', description: 'TK' },
      { name: 'TK III', description: 'TK' },
      { name: 'TK IV', description: 'TK' }
    ];
  
    const handleClick = () => {
      console.log("click handled")
    }
    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Welcome!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                    <a href="#about" onClick={() => handleClick()}>
                        About me
                    </a>
                    </li>
                    <li className={"mx-2"}>
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {
                        categories.map((category) => (
                        <li className="mx-1" key={category.name} >
                            <span onClick={() => { handleClick(); }}>
                            {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Nav;