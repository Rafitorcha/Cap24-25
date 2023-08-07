

function getKeyboardMath (screenWidth){
   
   //| diseño de teclado segun el tamaño inicial de la pantalla                                    |\\  
  // | recibe el tamaño de la pantalla y devuelve las configuraciones pertinentes a dicha calidad  | \\  
 //  |_____________________________________________________________________________________________|  /
 
  let MG_KEYBOARD_LAYER
  let MG_KEYBOARD = {}
  let virtualKeyboards = ""


  if(screenWidth <= 500){

    MG_KEYBOARD_LAYER = {
      "numerico": {
          styles: "",
          rows: [
            [
              { class: "separator" },
              { latex: "7"},
              { latex: "8"},
              { latex: "9" },
            
              { class: "separator " },

              {
                class: "action font-glyph bottom right",
                label: "&#x232b;",
                command: ["performWithFeedback", "deleteBackward"]
              },
              { class: "separator" },

            ],
            [
              { class: "separator" },
              { latex: "4", },
              { latex: "5", },
              { latex: "6", },

              { class: "separator" },

              { latex: "(" },
              { latex: ")" },
        
            ],
            [
            
              
              { latex: "0",},
              { latex: "1",},
              { latex: "2",},
              { latex: "3",},

              { class: "separator" },
          
              {
                  class: "action",
                  label: "<svg><use xlink:href='#svg-arrow-left' /></svg>",
                  command: ["performWithFeedback", "moveToPreviousChar"]
                },
                {
                  class: "action",
                  label: "<svg><use xlink:href='#svg-arrow-right' /></svg>",
                  command: ["performWithFeedback", "moveToNextChar"]
                },
                  
            ],
            
          ]
        },
        "variables":{
          styles: "",
          rows: [
            [
              { class: "separator" },
              { latex: "w", },
              {latex: "x",  },
              { latex: "y", },
              { latex: "z", },
              
              
              { class: "separator " },
              {
                class: "action font-glyph bottom right",
                label: "&#x232b;",
                command: ["performWithFeedback", "deleteBackward"]
              },
              { class: "separator" },
              
            ],
            [
              { class: "separator" },
              { latex: "f",  },
              { latex: "g",  },
              { latex: "h",  },
              { latex: "i", },
              { class: "separator" },
              { latex: "(" },
              { latex: ")" },
              
            ],
            [
      
              { class: "separator" },
              { latex: "a", },
              { latex: "b", },
              { latex: "c", },
              { latex: "d",},
          
              { class: "separator" },

              {
                  class: "action",
                  label: "<svg><use xlink:href='#svg-arrow-left' /></svg>",
                  command: ["performWithFeedback", "moveToPreviousChar"]
                },
                {
                  class: "action",
                  label: "<svg><use xlink:href='#svg-arrow-right' /></svg>",
                  command: ["performWithFeedback", "moveToNextChar"]
                },
                  
            ],
            
          ]
        
        },
        "funciones":{
          styles: "",
          rows: [
            [
    
              {
                class: "small",
                latex:"f\\left(\\right)",
                insert: "f\\left(\\right)"
              },
              { class: "small", latex: "f^{-1}" },
              
              { class: "separator " },

              {
                class: "action font-glyph bottom right",
                label: "&#x232b;",
                command: ["performWithFeedback", "deleteBackward"]
              },
              { class: "separator" },
              
            ],
            [
      
              
              {
                class: "small",
                latex:"g\\left(\\right)",
                
                insert: "g\\left(\\right)"
              }, 
              { class: "small",latex: "g^{-1}" },
              { class: "separator" },
              { latex: "(" },
              { latex: ")" },
            ],
            [

              {  class: "small",
              latex: "\\placeholder{}^{1}" },
              {  class: "small",
              latex: "\\placeholder{}^{-1}" },
          
              { class: "separator" },

              {
                  class: "action",
                  label: "<svg><use xlink:href='#svg-arrow-left' /></svg>",
                  command: ["performWithFeedback", "moveToPreviousChar"]
                },
                {
                  class: "action",
                  label: "<svg><use xlink:href='#svg-arrow-right' /></svg>",
                  command: ["performWithFeedback", "moveToNextChar"]
                },
                  
            ],
            
          ]
        
        },
    };
    
    MG_KEYBOARD = {
      "numerico": {
        "label": "123", // Label displayed in the Virtual Keyboard Switcher
        "tooltip": "Caminos", // Tooltip when hovering over the label
        "layer": "numerico"
      },
      "variables": {
          "label": "abc", // Label displayed in the Virtual Keyboard Switcher
          "tooltip": "abc", // Tooltip when hovering over the label
          "layer": "variables"
        },
      "funciones": {
          "label": "f()", // Label displayed in the Virtual Keyboard Switcher
          "tooltip": "f()", // Tooltip when hovering over the label
          "layer": "funciones"
        }
    };

    virtualKeyboards = "numerico variables funciones"


  }
  else{
    MG_KEYBOARD_LAYER = {
      "keyboard-MG-Cap2": {
        styles: "",
        rows: [
          [
            { latex: "w" },
            { latex: "x" },
            { latex: "y" },
            { latex: "z" },
            { class: "separator w5" },
            { label: "7", key: "7" },
            { label: "8", key: "8" },
            { label: "9", key: "9" },
            
            { class: "separator w5" },
            {
              class: "small",
              latex:"f\\left(\\right)",
              
              insert: "f\\left(\\right)"
            },
            {
              class: "small",
              latex:"g\\left(\\right)",
              
              insert: "g\\left(\\right)"
            },
            {
              class: "action font-glyph bottom right",
              label: "&#x232b;",
              command: ["performWithFeedback", "deleteBackward"]
            },
          ],
          [
            { latex: "f" },
            { latex: "g" },
            { latex: "h" },
            { latex: "i" },
    
            { class: "separator w5" },
            { label: "4", key:"4" },
            { label: "5", key: "5" },
            { label: "6", key: "6" },
            
            { class: "separator w5" },
            { class: "small", latex: "f^{-1}\\left(\\right)" },
            { class: "small",latex: "g^{-1}\\left(\\right)" },
            { class: "separator" },
            
          ],
          [
            {latex: "a" },
            { latex:"b"},
            { latex: "c" },
            { latex: "d" },
    
    
            { class: "separator w5" },
            { label: "1", key: "1" },
            { label: "2", key: "2" },
            { label: "3", key: "3" },
            { class: "separator" },
            
    
            { class: "separator w5" },
            { class: "separator" },
            { class: "separator" },
            
          ],
          [
            { latex: "(" },
            { latex: ")" },
            {  class: "small",
              latex: "\\placeholder{}^{1}" },
              {  class: "small",
              latex: "\\placeholder{}^{-1}" },
            
    
            { class: "separator w5" },
            { label: "0", key: "0" },
            { latex: "." },
            { latex: "\\pi" },
            
            { class: "separator w5" },
            
            {
              class: "action",
              label: "<svg><use xlink:href='#svg-arrow-left' /></svg>",
              command: ["performWithFeedback", "moveToPreviousChar"]
            },
            {
              class: "action",
              label: "<svg><use xlink:href='#svg-arrow-right' /></svg>",
              command: ["performWithFeedback", "moveToNextChar"]
            },
            
            { class: "separator" },
          ]
        ]
      },
      
    };

    MG_KEYBOARD = {
      "mg-capII-keyboard": {
        "label": "f()", // Label displayed in the Virtual Keyboard Switcher
        "tooltip": "Caminos", // Tooltip when hovering over the label
        "layer": "keyboard-MG-Cap2"
      },
    };

    virtualKeyboards = "mg-capII-keyboard"
  }

    return [MG_KEYBOARD_LAYER, MG_KEYBOARD, virtualKeyboards]


  }

