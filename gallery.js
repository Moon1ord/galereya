class Galereya{
    constructor(class_selector){
        const root_class = 'glry';
        this.elements = document.querySelectorAll("."+class_selector);
        this.sliders = [];
        class Slider{
            constructor(wrapper, root_class){
                this.slides = wrapper.querySelectorAll('div');

                wrapper.addEventListener('dragstart', dragStart);
                wrapper.addEventListener('dragend', dragEnd);

                function dragStart(){
                    console.log('start');
                }

                function dragEnd(){
                    console.log('end');
                }

                this.slides.forEach(slide => {
                    slide.classList.add(root_class + '-slide')
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
