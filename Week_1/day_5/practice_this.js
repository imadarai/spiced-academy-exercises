var margot = {
    name: 'Margot',
    intro: function(){
        console.log('Hi, my name is ' + this.name);
    }
};

margot.intro();

var fn = margot.intro;

console.log(fn == margot.intro);

fn();
