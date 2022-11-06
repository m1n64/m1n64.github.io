import TimestampInterface from "./timestamp.interface";

export default interface EducationsInterface extends TimestampInterface {
    EduactionTime: string,
    Facultity: string,
    Location: string,
    Name: string
}