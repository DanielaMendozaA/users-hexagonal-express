export class UserName {
    value: string;

    constructor(value: string) {
        this.value = value
    }

    private ensureIsValid() {
        if (this.value.length < 2) {
            throw new Error("UserName must be at least 2 characters long")
        }
    }
}