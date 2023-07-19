import { BehaviorSubject } from "rxjs"

export const USDCxWalletBalanceSub = new BehaviorSubject<[string, string] | undefined>(undefined)
