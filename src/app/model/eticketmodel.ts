export interface ResponseModel
{
    IsValid : boolean;
    Msg : string;
    IsValidStatus : number;
    ListMsg : string[];
}

export interface ListETicketViewModel extends ResponseModel {
    ETicket: ETicketViewModel;
    CountTotalStatus: CountTotalStatusViewModel
}

export interface CountTotalStatusViewModel {
    Status: number
    StatusDescription: string
    CountTotal: number
}

export interface ETicketViewModel extends ResponseModel {
    Id: number
    TicketNo: string
    Status: number
    StatusDescription: string
    CompCode: string
    CompName: string
    Topic: string
    ETicket_DivisionId: number
    ETicket_DivisionCode: string
    ETicket_DivisionName: string
    ETicket_TypeId: number
    ETicket_TypeDescription: string
    Description: string
    Email: string
    EmailSupervisor: string
    Telephone: string
    CurrentAssignTo: number
    CurrentAssignToName: string
    AssignToDatetime: string
    Priority: number
    Prioritydescription: string
    DueDate: string
    StartDate:string
    
    StartTime: string
    DueTime: string

    DescriptionAdvice: string
    Rating: number
    UserCreateId: number
    UserCreateName: string
    DatetimeCreate: string

    IsUploadFile: boolean
    IsProcess: boolean
    IsCompleted: boolean
    IsComment: boolean
    IsClose: boolean

    ETicket_DepartmentId: number
    ETicket_DepartmentName: string
    RatingComment: string

    FilePath: ETicketFilePathViewModel
    Comment: ETicketCommentViewModel
    Log: ETicketLogViewModel
}

export interface ETicketFilePathViewModel {
    Id: number
    Filename: string
}

export interface ETicketCommentViewModel {
    Id: number
    ETicketId: number
    Message: string
    UserId: number
    UserName: string
    DatetimeCreate: string
}

export interface ETicketLogViewModel {
    Id: number
    ETicketId: number
    Status: number
    StatusDescription: string
    LogDatetime: string
    UserId: number
    UserName: string
    Remark: string
}

export interface ETicketModel {
    Id: number
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string
    // [Required(ErrorMessage = "กรุณาระบุ หัวข้อ")]
    Topic: string
    // [Required(ErrorMessage = "กรุณาระบุ ฝ่ายที่ติดต่อ")]
    ETicket_DivisionId: any
    // [Required(ErrorMessage = "กรุณาระบุ ประเภทหรือโปรแกรมทีติดต่อ")]
    ETicket_TypeId: any
    // [Required(ErrorMessage = "กรุณาระบุ คำอธิบาย")]
    Description: string
    // [Required(ErrorMessage = "กรุณาระบุ E-Mail")]
    Email: string
    // [Required(ErrorMessage = "กรุณาระบุ E-Mail หัวหน้างาน")]
    EmailSupervisor: string
    // [Required(ErrorMessage = "กรุณาระบุ เบอร์โทรศัพท์")]
    Telephone: string

    FilePath: FileUploaded[]
}

export interface ETicketMastesParemeterModel {
    // [Required(ErrorMessage = "กรุณาระบุ Id")]
    Id: number
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string
}

export interface ETicketUploadFileModel extends ETicketMastesParemeterModel {
    FilePath: FileUploaded[]
}

export interface ETicketDeleteFileModel extends ETicketMastesParemeterModel {
    // [Required(ErrorMessage = "กรุณาระบุ FileId")]
    FileId: number
}

export interface FileUploaded {
    Id: number
    PathTemp: string
    FileName: string
    ContentType: string
    Length: number
    State: string
}

export interface ETicketParametrModel {
    // [Required(ErrorMessage = "กรุณาระบุ วันที่เริ่ม")]
    DateFrom: string
    // [Required(ErrorMessage = "กรุณาระบุ วันที่สินสุด")]
    DateTo: string
    // [Required(ErrorMessage = "กรุณาระบุ บริษัท")]
    CompCode: string
    TicketNo: string
    Status: number
    ETicket_DivisionId: number
    ETicket_TypeId: number
    CurrentAssignTo: number
    UserCreateId: number
    Priority: number
    DueDate: string
    IsAssign: any
    AdminMode: boolean
    ViewMode: boolean
}

export interface ETicketGetByIdParametrModel extends  ETicketMastesParemeterModel{
    AdminMode: boolean
    ViewMode: boolean
}

export interface ETicketCommentModel extends  ETicketMastesParemeterModel{
    // [Required(ErrorMessage = "กรุณาระบุ ข้อความ")]
    Message: string
    AdminMode: boolean
}

export interface ETicketAssignModel extends  ETicketMastesParemeterModel{
    // [Required(ErrorMessage = "กรุณาระบุ ผู้รับผิดชอบ")]
    CurrentAssignTo: number
    Priority: number
}

export interface ETicketProcessModel extends  ETicketMastesParemeterModel{
    Priority: number
    StartDate: string
    DueDate: string
    DescriptionAdvice: string
    ETicket_DepartmentId: number
    AdminMode: boolean
}

export interface ETicketCompletedModel extends  ETicketMastesParemeterModel{
    AdminMode: boolean
}

export interface ETicketCloseModel extends  ETicketMastesParemeterModel{
    // [Required(ErrorMessage = "กรุณาให้คะแนนความพึงพอใจ")]
    Rating: number
    RatingComment: string
    AdminMode: boolean
}

export interface FileUploaded
{
    Id : number;
    PathTemp : string;
    FileName : string;
    ContentType : string;
    Length : number;
    State : string;
}