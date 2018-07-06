$(document).ready(function() {
	if (window.location.pathname === "/blog/newpost") {
          //Hide the element.
          jQuery("#createNewPost").hide();
      }

      if (window.location.pathname !== "/signup") {
          //Hide the element.
          jQuery("#createAccount").hide();
      } else {
      	jQuery("#mUserBlog").hide();
      }

      if (window.location.pathname !== "/login") {
          //Hide the element.
          jQuery("#loginHead").hide();
      } else {
        jQuery("#mUserBlog").hide();
      }

      if (window.location.pathname !== "/blog/newpost") {
          //Hide the element.
          jQuery("#newPost").hide();
      } else {
        jQuery("#mUserBlog").hide();
      }
  });