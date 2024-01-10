interface Teacher {
  readonly firstName: string;
  fullTimeEmployee: boolean;
  readonly lastName: string;
  location: string;
  contract: boolean;
  yearsOfExperience?: number;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}
