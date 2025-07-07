import Cycle from '../server/models/CycleInfo.js';
import User from '../server/models/User.js';
import { expect, test } from 'vitest'

test('Test tests', () => {
    expect(1).toBe(1);
});

// test('Test mongodb cycle info', () => {
//     const testCycle = new Cycle({User: 1});
//     testCycle.MenstruationStart = new Date('2025-06-01');
//     testCycle.MenstruationEnd = new Date('2025-06-05');
//     testCycle.OvulationDate = new Date('2025-06-10');
//     testCycle.UserNote = 'Test'
    

//     // expect(toBe('Test'));
// });