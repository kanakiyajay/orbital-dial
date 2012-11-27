describe('initialise the object', function () {

    beforeEach(function () {
        setFixtures(sandbox());
        $('#sandbox').append('<div id="Knob"><div id="Slider"></div></div>');

        this.knob = new Knob();
    });

    it('should return an object', function () {
        expect(typeof this.knob).toBe('object');
    });

    it('should bind to a default container', function (){
        expect(this.knob.container).toBe('#Knob');
    });

    it('container should have a default height and width', function() {
        expect(typeof this.knob.containerWidth).not.toBe('undefined');
        expect(typeof this.knob.containerHeight).not.toBe('undefined');

        expect(this.knob.containerWidth).toBe(200);
        expect(this.knob.containerHeight).toBe(200);
    });

    it('should have a inner element [slider]', function () {
        expect(typeof this.knob.innerElement).not.toBe('undefined');
        expect(this.knob.innerElement).toBe('#Slider');
    });

    it('inner element should have a default height and width', function() {
        expect(typeof this.knob.innerElementWidth).not.toBe('undefined');
        expect(typeof this.knob.innerElementHeight).not.toBe('undefined');

        expect(this.knob.innerElementWidth).toBe(50);
        expect(this.knob.innerElementHeight).toBe(50);
    });

    it('should have a default starting angle', function() {
        expect(this.knob.startAngle).toBe(0);
    });

    describe('override defaults', function () {
        beforeEach(function() {
            $('#sandbox').append('<div class="my-knob" data-width="300" data-height="300"><div class="slider" data-width="40" data-height="50" data-start-angle="92"></div> </div>');
            this.containerSelector = '.my-knob';
            this.innerSelector = '.slider';
            this.customKnob =  new Knob({containerSelector:this.containerSelector, innerSelector:this.innerSelector});

        });

        it('should allow me to pass in a container to bind to', function() {
            expect(this.customKnob.container).toBe(this.containerSelector);
        });

        it('should allow me to override the default height and width of container', function () {
            expect(this.customKnob.containerWidth).toBe(300);
        });

        it('should allow me to override the inner element selector', function () {
            expect(typeof this.customKnob.innerElement).not.toBe('undefined');
            expect(this.customKnob.innerElement).toBe(this.innerSelector);
        });


        it('should allow me to override the default height and width of the inner element', function () {
            expect(this.customKnob.innerElementWidth).toBe(40);
            expect(this.customKnob.innerElementHeight).toBe(50);
        });

        it('should have an overriden starting angle', function() {
            expect(this.customKnob.startAngle).toBe(92);
        });
    });

    describe('calculate stuff', function() {
        it('should calculate the radius', function() {

            expect(this.knob.radius).toBe(75);
        });
    });
});