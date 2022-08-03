import React from 'react'
 import {useNavigate} from 'react-router-dom';


export default function Contact() {
  const navigate = useNavigate()
  return (
    <div>
          <div>
        <h1>Contact Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus, hic illum architecto quos rerum velit. Culpa eveniet beatae eaque, nobis repellendus rem eum ipsa id pariatur autem obcaecati quos similique porro dolore est et, tenetur illum? Expedita temporibus, aspernatur ipsam dicta nesciunt at ipsum repudiandae corporis soluta necessitatibus nemo maxime quae rem impedit. Eum iste quidem, quam ad dolor earum velit animi. Maxime animi modi quidem fugit, corrupti a aut illo et itaque adipisci vitae repellat vero, necessitatibus corporis vel laborum ducimus, eos repellendus veritatis culpa voluptate deserunt quam debitis. A corporis veritatis odit quaerat tenetur, voluptates aliquam aperiam?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus, hic illum architecto quos rerum velit. Culpa eveniet beatae eaque, nobis repellendus rem eum ipsa id pariatur autem obcaecati quos similique porro dolore est et, tenetur illum? Expedita temporibus, aspernatur ipsam dicta nesciunt at ipsum repudiandae corporis soluta necessitatibus nemo maxime quae rem impedit. Eum iste quidem, quam ad dolor earum velit animi. Maxime animi modi quidem fugit, corrupti a aut illo et itaque adipisci vitae repellat vero, necessitatibus corporis vel laborum ducimus, eos repellendus veritatis culpa voluptate deserunt quam debitis. A corporis veritatis odit quaerat tenetur, voluptates aliquam aperiam?</p>
    </div>
    <button onClick={()=>navigate('/blog')}>Go to Home</button>
    </div>
  )
}

