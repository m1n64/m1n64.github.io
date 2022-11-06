import TimestampInterface from "./timestamp.interface";

export default interface WorkExperiencesInterface extends TimestampInterface {
    Description: string,
    Location: string,
    Name: string,
    Position: string,
    WorkTime: string
}