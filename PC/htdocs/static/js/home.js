
// function Fn(name,age){
//     this.name=name;                           //构造函数的属性多样
//     this.age=age;
//     if((typeof Fn.prototype.eat)!="funciton"){    //判断语句中是否有该方法，没有则创建
//         Fn.prototype.eat=function(){            //原型的方法共享
//             console.log(this.name+"吃了饭");
//         }
//     }
//     console.log(this.name + this.age)
// }
// var s1=new Fn("李四");
// s1.eat();
// function Son(name,age,sex){                 //创建子类构造函数
//     Fn.call(this,name,age)                //借调Fn()的属性
//     this.sex=sex;
// };
// Son.prototype=new Fn();         //Son.prototype指向父类对象，实现了继承，所以能够调用eat方法，
// var s1=new Son("李四",20,"男");    //若没有继承，单单的使用call借调Fn继承，子类实例s1无法调用eat方法
// console.log(s1);            //因为call不是真正的继承
// s1.eat();

// var a = 5;
// var b = a*2;
// a = null; //垃圾回收
// console.log(b);
// console.log(a);

// var a = 2;
// var b= (a++) + a;
// console.log(b);

// console.log(16 + "Volvo");
var name = "The Window";

var object = {
    name : "My Object",

    getNameFunc : function(){
        return function(){
            alert(this);
            return this.name;
        };

    }

};

alert(object.getNameFunc()());
