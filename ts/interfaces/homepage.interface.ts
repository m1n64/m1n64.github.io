import TimestampInterface from "./timestamp.interface";

export default interface HomepageInterface extends TimestampInterface {
    About?: string,
    Location: string,
    Name: string,
    Position: string,
}