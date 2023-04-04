function giai_phuong_trinh_bac_nhat(a, b) {

    if (a == 0 && b == 0) {
        console.log(); ('Phương trình vô số nghiệm');
    }
    else if (a != 0 && b == 0) {
        console.log(); ('Phương trình có nghiệm x = 0');
    }
    else if (a == 0 && b != 0) {
        console.log("Phương trình vô nghiệm");
    }
    else {
        let x = (-b / a);
        return `Nghiệm của phương trình ${a}x + ${b} = 0 là: x = ${x}`;
    };
}
let a = 5;
let b = 8;
let ketQua = giai_phuong_trinh_bac_nhat(a, b);
console.log(ketQua);