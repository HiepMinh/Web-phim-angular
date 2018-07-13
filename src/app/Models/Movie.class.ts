export class Movie{
    //  ID:number;
    //  Title:string;
    //  Description:string;
    //  Image:string;
    //  GenreName:string;
    //  Director:string;
    //  Writer:string;
    //  Producer:string;
    //  RealeaseDate:Date;
    //  Rating:number;
    //  TrailerURI:string;
    //  GroupID:string;

    // constructor(
    //     ID:number,
    //     Title:string,
    //     Description:string,
    //     Image:string,
    //     GenreName:string,
    //     Director:string,
    //     Writer:string,
    //     Producer:string,
    //     RealeaseDate:Date,
    //     Rating:number,
    //     TrailerURI:string,
    //     GroupID:string
    // ){
    //     this.ID = ID;
    //     this.Title = Title;
    //     this.Description = Description;
    //     this.Image = Image;
    //     this.GenreName = GenreName;
    //     this.Director = Director;
    //     this.Producer = Producer;
    //     this.Writer = Writer;
    //     this.RealeaseDate = RealeaseDate;
    //     this.Rating = Rating;
    //     this.TrailerURI = TrailerURI;
    //     this.GroupID = GroupID;

    // }

    DanhGia:number;
    HinhAnh:string;
    MaNhom:string;
    MaPhim:number;
    MoTa:string;
    NgayKhoiChieu:Date;
    TenPhim:string;
    Trailer:string;

    constructor(
        DanhGia:number,
        HinhAnh:string,
        MaNhom:string,
        MaPhim:number,
        MoTa:string,
        NgayKhoiChieu:Date,
        TenPhim:string,
        Trailer:string
    ){
        this.DanhGia  = DanhGia;
        this.HinhAnh  = HinhAnh;
        this.MaNhom  = MaNhom;
        this.MaPhim  = MaPhim;
        this.MoTa  = MoTa;
        this.NgayKhoiChieu  = NgayKhoiChieu;
        this.TenPhim  = TenPhim;
        this.Trailer  = Trailer;
    }

   
    
}