export interface photoCardProps {
  pic: string;
  isActive: boolean;
  fiendName?: string;
  setActiveFiend:React.Dispatch<React.SetStateAction<string>>;
}
