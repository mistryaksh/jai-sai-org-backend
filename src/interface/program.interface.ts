import { IEventCategoryProps } from "./event-category.interface";

export interface IProgramProps {
     label: string;
     subTitle: string;
     description: string;
     requiredDonation: string;
     receivedDonation?: string;
     categoryId: string | IEventCategoryProps;
     active: boolean;
}
