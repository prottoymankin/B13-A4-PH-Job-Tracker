### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById is used to select an HTML element by its id attribute. If there any element exists with the specified id it returns the element node and if there no element exists with the specified id it returns null.

getElemntsByClassName is used to select multiple elements with the same class name using class attribute. If there any elements exists with the specified class name it returns HTMLCollection, if not then return an empty HTMLCollection.

querySelector is all used to select an HTML element by its class name or id name and tagName but in queryselector we have to mension the selector (class selector and id selector) before the class name or id name.
Example: document.querySelector("#id"), document.querySelector(".class")

querySelectorAll is also used to select multiple elements by class name and tag name. It returns NodeList if there any element exists with the specified class name or tag name or it return empty NodeList.

### 2. How do you create and insert a new element into the DOM?
- first we need to create an new element using document.createElement() and then we have to get the parent element and then we have to insert the created element into the parent element or container using parentElement.appendChild(createdElement);

### 3. What is Event Bubbling? And how does it work?
- Event Bubbling is a concept of DOM. It happens when an event triggered on an element then this event goes up step by step to its parents in the DOM Tree.
when we click on a child element, the event works first on the element then it goes upward to its parent then grandparent and keeps going on. This process is called event bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation is a technique where we attach event on parent element instead of attach on multiple child elements. Then we use the event.target to find out in which child element the event has occured. It comsumes less memory. Instead of using multiple events we use one events. It also works when new child elements are added. less code and easy to maintain.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() methods is used to prevent the defualt behaviour of an element. Besides, stopPropagation() method is stops the event from travels to its parents.