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
                this.moveToRightSlide = ()=>{paginationRight();};
                this.moveToLeftSlide = ()=>{paginationLeft();};

                function paginationRight(){
                    console.log(self.currentSlide);

                    if(self.currentSlide < self.amountOfSlides - 1){
                        self.currentSlide++;
                    }else{
                        self.currentSlide = 0
                    }
                    wrapper.style.transform = 'translateX(' + self.currentSlide * -100 + '%)'; 
                    console.log(self.currentSlide);
                };

                params.right_arrow.addEventListener('click', this.moveToRightSlide);
                params.left_arrow.addEventListener('click', this.moveToLeftSlide);
                
                this.slides.forEach(function(slide){
                    slide.classList.add(root_class + '-slide')
                });
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
