import Cycle from '../server/models/CycleInfo.js';
import User from '../server/models/User.js';
import {expect, test} from 'vitest'

test('Test mongodb cycle getters/setters', () => {
    const testCycle: any = new Cycle({User: 1});
    testCycle.setMenstruationStart(new Date('2025-06-01'));
    testCycle.setMenstruationEnd(new Date('2025-06-05'));
    testCycle.setOvulationDate(new Date('2025-06-10'));
    testCycle.setUserNote("test");
    expect(testCycle.getMenstruationStart().getTime()).toBe((new Date('2025-06-01')).getTime());
    expect(testCycle.getMenstruationEnd().getTime()).toBe((new Date('2025-06-05')).getTime());
    expect(testCycle.getOvulationDate().getTime()).toBe((new Date('2025-06-10')).getTime());
    //toBe() uses strict (===) equality  
    expect(testCycle.getUserNote() == "test").toBe(true);
});

test('Test mongodb user getters/setters', () => {
    const testUser: any = new User({
        userID: 1,
        username: "JohnDoe",
        email: "test@example.com",
        password: 12345
    });
    expect(testUser.getUsername() == "JohnDoe").toBe(true);
    expect(testUser.getEmail() == "test@example.com").toBe(true);

});

test('Test mongodb cycle calculations + summary', () => {
    const testCycle: any = new Cycle({User: 1});
    testCycle.setMenstruationStart(new Date('2025-06-01'));
    testCycle.setMenstruationEnd(new Date('2025-06-05'));
    testCycle.setOvulationDate(new Date('2025-06-10'));
    testCycle.setUserNote("test");
    
    testCycle.setFertileWindow(new Date('2025-07-01'), new Date('2025-07-07'));
    testCycle.calculateCycleLength();
    testCycle.setAverageCycleLength(27);

    const summary = testCycle.getCycleSummary();

    expect(summary.averageCycleLength).toBe(27);
    expect(summary.fertileWindow.start.getTime()).toBe(new Date('2025-07-01').getTime());
    expect(summary.fertileWindow.end.getTime()).toBe(new Date('2025-07-07').getTime());
});