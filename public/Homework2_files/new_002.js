(function() { this.JST || (this.JST = {}); this.JST["backbone/templates/students/new"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h1>New student</h1>\n\n<form id="new-student" name="student">\n  <div class="field">\n    <label for="name"> name:</label>\n    <input type="text" name="name" id="name" value="',  name ,'" >\n  </div>\n\n  <div class="field">\n    <label for="email"> email:</label>\n    <input type="text" name="email" id="email" value="',  email ,'" >\n  </div>\n\n  <div class="field">\n    <label for="phone"> phone:</label>\n    <input type="text" name="phone" id="phone" value="',  phone ,'" >\n  </div>\n\n  <div class="field">\n    <label for="advisor"> advisor:</label>\n    <input type="text" name="advisor" id="advisor" value="',  advisor ,'" >\n  </div>\n\n  <div class="actions">\n    <input type="submit" value="Create Student" />\n  </div>\n\n</form>\n\n<a href="#/index">Back</a>\n');}return __p.join('');};
}).call(this);
