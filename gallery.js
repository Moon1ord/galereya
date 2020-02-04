class Galereya{
    constructor(class_selector, params){
        const root_class = 'glry';
        this.elements = document.querySelectorAll("."+class_selector);
        this.sliders = [];
        class Slider{
            constructor(wrapper, root_class, params){
                const self = this;
                this.slides = wrapper.querySelectorAll('div');
                this.amountOfSlides = this.slides.length;
                this.currentSlide = 0;
                this.moveToRightSlide = () => {paginationRight();};
                this.moveToLeftSlide = () => {paginationLeft();};

                this.slides.forEach(function(slide){
                    slide.classList.add(root_class + '-slide')
                });

                //Drag and Drop
                let offsetX = 0;
                let clientOffsetX = 0;
                let isDown = false;
                
                wrapper.addEventListener('mousedown', function(e){
                    isDown = true;
                    offsetX = e.clientX;
                }, true);

                document.addEventListener('mouseup', function(e){
                    if(isDown === true){
                        if(offsetX < e.clientX){
                            self.moveToLeftSlide();
                        }
                        else{
                            self.moveToRightSlide();
                        }
                    }
                    isDown = false;
                }, true);

                //

                function paginationRight(){
                    if(self.currentSlide < self.amountOfSlides - 1){
                        self.currentSlide++;
                    }else{
                        self.currentSlide = 0
                    }
                    wrapper.style.transform = 'translateX(' + self.currentSlide * -100 + '%)'; 
                };

                function paginationLeft(){
                    if(self.currentSlide <= 0){
                        self.currentSlide = self.amountOfSlides -1;
                    } else{
                        self.currentSlide--
                    }
                    
                    wrapper.style.transform = 'translateX(' + self.currentSlide * -100 + '%)'; 
                };

                params.right_arrow.addEventListener('click', this.moveToRightSlide);
                params.left_arrow.addEventListener('click', this.moveToLeftSlide);
            }
        }
        
        this.elements.forEach(element => {
            element.classList.add(root_class);
            let wrapper = element.children[0];
            wrapper.classList.add(root_class + '-wrapper');
            let slider = new Slider(wrapper, root_class ,params);
            this.sliders.push(slider);
        });
    }
}
