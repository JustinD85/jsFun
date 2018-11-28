const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'global window object';
    return result;

    // Annotation:
    /* Arrow functions do not have `this` so the
    value of `this` is captured when the function is declared as oppossed to invoked like
    with normal functions.
    */
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    /*
    Here the function is not being invoked on an object and so it by default inherits from
    the global object `window`
    */
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: () => {
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    /* 
      `this` refers to the element because getInfo is being passed as  reference and not invoked externally.
      Since callbacks are invoked internally, `this` also gains the context of the event listener function
      which is this case is `el` or the element that was selected from the DOM.
    */
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    /*
    This returns the global window object because the inner function was not invoked
    from an object an so it default to the window object.
     */ 
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    /*
      fn is being invoked with no context given, that is, it is not called directly from an object or used
      after the word `new`. So the context it is given by default is the global window object.
    */
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    /* 
      In this instance `this` would be an instance of Hero because Hero was invoked after the `new` keyword.
      This causes `this` to gain the context of the instance instead of keeping the context of Hero.
    */
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'global window object';
    return result;

    // Annotation: 
    /*
      In this instance it would be the global window object because `this` is used in a function that is 
      call from a function and so the rule is that it will gain the global context by default.
    */
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    /*
      Arrow functions with `this` gain context on declaration instead of invocation, as well as arrow
      functions have no `this` inherintly. The arrow function is an inner funtion and so isn't technically 
      declared/defined until `method` is ran. Method is a normal functin and gains it's context on invocation.
      In this example it is invoked from an object and so given the context of that obj for `this`. The arrow
      function is defined/declared/invoked right after and take the `this` from the outter function thus
      return `obj`.
    */
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    /*
      The value of `this` is poets because map takes a second optional argument of `[,thisArg]` which
      allows you to specify the context of this. In this example that second argument is poets. Without
      that the global window object would be used because the callback is being used. This means that 
      a function was called in another function and so this would have the context of the global window
      object.
    */
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    /*
      Similar to exerciseC using eventlisteneres excepting that we are using JQuery here. The main takeaway here is that 
      encapsulating `this` with `$()` gives you access to JQuery methods because this is turned into a 
      JQuery object. Explicitly, this is redefined inside of eventlisteners so this is given the locally
      scoped value.
    */
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    /*
      Because we are using an arrow function, `this` is given its context when defined. However, this is
      still being overridden by the event.target which is given the value of `this`.
    */
  }

};

module.exports = context;