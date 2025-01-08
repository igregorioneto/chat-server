export class UserStateStore {
    private static instance: UserStateStore;
    private userStatuses: Record<string, boolean>;

    constructor() {
        this.userStatuses = {};
    }

    public static getInstance(): UserStateStore {
        if (!UserStateStore.instance) {
            UserStateStore.instance = new UserStateStore();
        }
        return UserStateStore.instance;
    }
    
    setUserOnline(userId: string) {
        this.userStatuses[userId] = true;
    }

    setUserOffline(userId: string) {
        this.userStatuses[userId] = false;
    }

    isUserOnline(userId: string): boolean {
        return !!this.userStatuses[userId];
    }
}