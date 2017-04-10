import React, { Component } from 'react';

class Introduction extends Component{
      render() {
          return (
            <div>
              <h2>What is routing in React ?</h2>
              <p>Single-page apps are different from the more traditional multi-page apps that you see everywhere. 
              The biggest difference is that navigating a single-page app doesn't involve going to an entirely new page. 
              Instead, your pages (commonly known as <b>views</b> in this context) typically load inline within the 
              same page itself.</p><p> Like the image below:</p>

               <img src={require('./images/single_page_model.png')} style={{height:500, width:500}} />

               <p>When users navigate your app, they expect that:</p>

				<ul>
					<li>The URL displayed in the address bar always reflects the thing that they are viewing.</li>
					<li>They can use the browser's back and forward buttons.</li>
					<li>They can navigate to a particular view (aka <b>deep link</b>) directly using the appropriate URL.</li>
				</ul>

				<p>To deal with all of this, you have a bucket full of techniques commonly known as <b>Routing</b>. 
				Routing is where you try to map URLs to destinations that aren't physical pages such as the individual views 
				in your single-page app.</p>
            </div>
          );
        }
    };

export default Introduction;
