The App displays all the users present in a Datatable that can be sorted base on different columns values.

Top left corner has a navigation Menu to switch between multiple routes. (Note: The routes for profile and posts is only displayed if a User is selected from the table.)

The User as 2 CTA's "View Profile" and "View Posts" that sets the current user and changes the route. Depending on which CTA is selected the respective component is rendered.

Upgrades/Optimizations that could have been done if I had enough time:

1. Centralized the state using Context API or redux to store selected user and the posts (to avoid unnecessary requests).
2. Would have used iframes as proposed in the document and would have used brower storage or window object to communicate.
