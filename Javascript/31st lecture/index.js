/**გააკეთეთ მოდალური ფანჯარა ორნაირად: როგორც onclick ფუნქციით და როგორც addEventListener ფუნქციით. ამ შემთხვევაში, მოდალური ფანჯარა უნდა გამოჩნდეს, როდესაც მომხმარებელი დააჭერს ღილაკს.


addEventListener ფუნქციაში გამოიყენეთ classlist add და remove ფუნქციები, რათა მოდალური ფანჯარა გამოჩნდეს და გაქრეს.

გააკეთეთ navbar, რომელიც შეიცავს ღილაკს, რომლითაც მომხმარებელი შეძლებს მოდალური ფანჯრის გახსნას, სადაც ავტომატურად გამოჩნდება მენიუ, დაიბლარება background და გამოჩნდება ღილაკი, რომლითаც მომხმαრებელი შეძლებს დახურვաს. გამოიყენეთ toggle/ */


addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('myModal');
    const navbar = document.getElementById('navbar');
    openModalBtn.addEventListener('click', function() {
        modal.classList.add('show');
        navbar.classList.add('blur');
    });

    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        navbar.classList.remove('blur');
    });
});