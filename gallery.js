class Galereya{
    constructor(class_selector){
        const root_class = 'glry';
        this.elements = document.querySelectorAll("."+class_selector);
        this.sliders = [];
        class Slider{
            constructor(wrapper, root_class){
                const self = this;
                this.slides = wrapper.querySelectorAll('div');
                this.amountOfSlides = this.slides.length;
                this.currentSlide = 0;

                wrapper.addEventListener('click', function(){
                    if(self.currentSlide < self.amountOfSlides - 1){
                        self.currentSlide++;
                    }else{
                        self.currentSlide = 0;
                    }

                    wrapper.style.transform = 'translateX(' + self.currentSlide * -100 + '%)'; 
                });

                this.slides.forEach(function(slide, index){
                    slide.classList.add(root_class + '-slide')
                    if(index === 0){
                        slide.classList.add('current');
                    }
                });
            }
        }
        
        this.elements.forEach(element => {
            element.classList.add(root_class);
            let wrapper = element.children[0];
            wrapper.classList.add(root_class + '-wrapper');
            let slider = new Slider(wrapper, root_class);
            this.sliders.push(slider);
        });
    }
}
