export class UserRegister{
    // public FirstName:string;
    // public LastName:string;
    // public Email:string;
    // public DateOfBirth:Date;
    // public Phone:string;
    // public DateRegister:Date;
    // public UserName:string;
    // public PassWord:string;
    // public GroupID:string;

    TaiKhoan:string;
    MatKhau:string;
    Email:string;
    SoDT:string;
    MaNhom:string;
    MaLoaiNguoiDung:string;
    HoTen:string;
    
    // TenLoaiNguoiDung:string;
    
    constructor(
        TaiKhoan:string,
        MatKhau:string,
        Email:string,
        SoDT:string,
        MaNhom:string,
        MaLoaiNguoiDung:string,
        HoTen:string
    ){
        this.TaiKhoan = TaiKhoan;
        this.MatKhau = MatKhau;
        this.Email = Email;
        this.SoDT = SoDT;
        this.MaNhom = MaNhom;
        this.MaLoaiNguoiDung = MaLoaiNguoiDung;
        this.HoTen = HoTen;
    }

}