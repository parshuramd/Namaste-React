Namaste React Course Akshay Saini

what is emmet?
Emmet is a plugin for text editors that allows users to write HTML and XML code faster and more efficiently.

Difference between a Library and Framework?
A library is a collection of code that you can call from your own code to perform a specific task. A library is a reusable piece of code that can be called from multiple programs, potentially by multiple developers.

A framework, on the other hand, is a structure for building applications. It provides a set of predefined classes and functions that you can use, as well as a structure for organizing your code. With a framework, you build your application by using and extending the classes and functions provided by the framework, rather than writing all of the code yourself from scratch.

The main difference between a library and a framework is that with a library, you call the code, while with a framework, the code calls you. This means that with a framework, you need to write your code in a specific way to fit within the structure provided by the framework. With a library, you can use the code however you like, as long as you know how to call it.

What is CDN? Why do we use it?
A content delivery network (CDN) is a system of distributed servers that deliver web content to a user based on the geographic locations of the user, the origin of the web page, and the content delivery server. CDNs can be used to deliver a variety of content, including HTML pages, JavaScript files, stylesheets, images, and videos.

There are several reasons why CDNs are used:

Performance: CDNs can improve the performance of a website by serving content from a location that is closer to the user, which reduces the amount of time it takes for the content to be delivered.

Security: CDNs can help protect against distributed denial of service (DDoS) attacks by absorbing the traffic and preventing it from reaching the origin server.

Scalability: CDNs can help a website handle a large number of requests by distributing the load across multiple servers.

Reliability: CDNs can help ensure that a website remains available even if the origin server goes down, by serving cached copies of the content from other locations.

Cost: CDNs can reduce the cost of serving content by offloading some of the traffic from the origin server and reducing the need for expensive hardware and bandwidth.

Why is React known as React?
React is a JavaScript library for building user interfaces that was developed by Facebook. It is known as React because it is designed to "react" to changes in data, rather than requiring the developer to manually update the UI.
In other words, when the data that a React component depends on changes, the component will automatically re-render itself to reflect the new data. This allows developers to build complex, interactive user interfaces with a declarative approach, rather than having to write a lot of imperative code to manually manipulate the DOM.
The name "React" is a reference to this reactive nature of the library, and reflects its focus on building user interfaces that are efficient, fast, and responsive to changes in data.

What is crossorigin in script tag?
The crossorigin attribute is an optional attribute of the script tag in HTML that is used to indicate that the script is being loaded from a different origin than the current page.
The crossorigin attribute has two possible values: anonymous and use-credentials.
Setting the crossorigin attribute to anonymous indicates that the script is being loaded from a different origin, but that no credentials (such as cookies or HTTP authentication) should be sent with the request for the script. This is useful for scripts that are hosted on a CDN or other external server, and that do not need to access any sensitive information from the current page.
Setting the crossorigin attribute to use-credentials indicates that the script is being loaded from a different origin, and that credentials (such as cookies or HTTP authentication) should be sent with the request for the script. This is useful for scripts that need to access sensitive information from the current page, such as user session data.
In general, the crossorigin attribute is used to enable CORS (Cross-Origin Resource Sharing) for scripts, which allows a web page to make requests to a server from a different origin than the current page. This is necessary because of the same-origin policy, which restricts web pages from making requests to a server from a different origin for security reasons.

What is diference between React and ReactDOM?
React is a JavaScript library for building user interfaces, while ReactDOM is a separate library that provides DOM-specific methods that can be used to interact with the DOM.
React is designed to be used for building reusable UI components, while ReactDOM is designed to be used for rendering React components to the DOM. In other words, React is the core library that provides the APIs for building UI components, while ReactDOM provides the specific methods for rendering those components to the DOM and for updating the DOM when the component's data changes.
Here's a simple example of how these two libraries might be used together:

// code
import React from 'react';
import ReactDOM from 'react-dom';
const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, document.getElementById('root'));

In this example, the element variable is a React element that represents an h1 element. The ReactDOM.render() method is used to render this element to the DOM by inserting it into the element with the id of "root".
In general, React and ReactDOM should be used together when building applications with React, with React providing the core APIs for building UI components and ReactDOM providing the specific methods for rendering those components to the DOM and for updating the DOM when the component's data changes.

What is difference between react.development.js and react.production.js files via CDN?
The react.development.js file is a development version of the React library, while the react.production.js file is a minified and optimized version of the library that is intended for use in production.
The development version of the React library includes extra debugging information and is not minified, which makes it easier to work with and debug during development. However, it is larger and slower than the production version, so it is not suitable for use in a production environment.
The production version of the React library has been minified and optimized for performance, so it is smaller and faster than the development version. It does not include any debugging information, so it is not as easy to work with and debug during development. However, it is more efficient and suitable for use in a production environment.
When using the React library via a CDN, you should use the development version during development and the production version in production.

What is async and defer?
The async and defer attributes are optional attributes that can be used on the script tag in HTML to specify the behavior of the script when it is loaded.
The async attribute tells the browser that the script should be loaded asynchronously, meaning that it can be loaded in the background while the rest of the page continues to load. This can improve the performance of the page, since the script does not block the loading of other elements on the page. However, it also means that the script may not be available immediately when the page loads, and that any code that depends on the script may need to be deferred until the script has finished loading.
The defer attribute tells the browser that the script should be executed only after the page has finished loading. This can be useful for scripts that need to be executed after the rest of the page has loaded, but that do not need to block the loading of the page. Like the async attribute, the defer attribute can improve the performance of the page by allowing other elements on the page to load while the script is being downloaded.
Here's an example of how these attributes might be used:
//code

<script src="myscript.js" async></script>
<script src="myscript.js" defer></script>

In general, the async attribute is used for scripts that do not need to be executed in a particular order, while the defer attribute is used for scripts that should be executed after the page has finished loading, but in the order that they appear in the HTML.
