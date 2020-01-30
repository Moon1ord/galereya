class Galereya{
    constructor(element_classname) {
        class Slider{
            constructor(elem, class_name, root_class_name){
                const self = this;

                this.element = elem;
                this.slides = [];
                this.current_slide = null;
                this.root_class_name = root_class_name;
               
                function GetSlides(slider){
                   if(slider.querySelectorAll(":not(."+class_name+"-slide)").length > 0){
                        throw 'Slider contains non slide elements';
                   }else {
                    self.slides = slider.children;
                    self.current_slide = self.slides[0];
                   }  
                }

                function WrapCssSlides(array_of_slides){
                   for (let slide of array_of_slides){
                      slide.classList.add(root_class_name + '-slide'); 
                   }
                }

                GetSlides(this.element);
                WrapCssSlides(this.slides);
            }
        }

        const self = this;

        const root_class_name = 'glry';
        this.sliders = [];
        this.class_name = element_classname; 

        let elements = document.querySelectorAll('.' + element_classname);

        elements.forEach(function(elem){
            elem.classList.add(root_class_name);
            let slider = new Slider(elem, self.class_name, root_class_name);
            self.sliders.push(slider);
        });
    }
}
