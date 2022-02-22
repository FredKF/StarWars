
export interface ListOfStarships {
    count:    number;
    next:     string;
    previous: null;
    results:  Nave[];
}

export interface Nave {
    id?:                     string;
    pic?:                    string;
    name?:                   string;
    model?:                  string;
    manufacturer?:           string;
    cost_in_credits?:        string;
    length?:                 string;
    max_atmosphering_speed?: string;
    crew?:                   string;    
    url?:                    string;
}
