const { format_date, format_plural } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-21 16:12:03');

    expect(format_date(date)).toBe('3/21/2020');
});

test('format_plural() returns a pluralized word', () => {
    expect(format_plural("Tiger", 2)).toBe('Tigers');
    expect(format_plural("Lion", 1)).toBe('Lion');
})