/**
 * Format a date as "DD Month YYYY" (e.g., "15 January 2024")
 */
export const formatDate = (date: Date | string | null | undefined): string => {
    if (!date || (typeof date === 'string' && date.trim() === '')) return 'TBA';
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Africa/Blantyre'
    });
};

/**
 * Format a time as "HH:MM" (e.g., "14:30")
 */
export const formatTime = (date: Date | string | null | undefined): string => {
    if (!date || (typeof date === 'string' && date.trim() === '')) return 'TBA';
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return `${dateObj.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Africa/Blantyre'
    })}`;
};

/**
 * Format a time range from two dates
 */
export const formatTimeRange = (
    startDate: Date | string | null | undefined,
    endDate: Date | string | null | undefined
): string => {
    if (!startDate || !endDate ||
        (typeof startDate === 'string' && startDate.trim() === '') ||
        (typeof endDate === 'string' && endDate.trim() === '')) return 'TBA';

    const startObj = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const endObj = typeof endDate === 'string' ? new Date(endDate) : endDate;
    return `${startObj.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Africa/Blantyre'
    })} - ${endObj.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Africa/Blantyre'
    })} (CAT)`;
};

/**
 * Time zone aware formatting
 */
export const formatDateTimeWithZone = (
    startDate: Date | string | null | undefined,
    endDate: Date | string | null | undefined,
): { date: string; timeRange: string; timeZone: string } => {
    if (!startDate || (typeof startDate === 'string' && startDate.trim() === '')) {
        return { date: 'TBA', timeRange: 'TBA', timeZone: 'CAT' };
    }

    const startObj = typeof startDate === 'string' ? new Date(startDate) : startDate;
    const endObj = endDate && typeof endDate === 'string' ? new Date(endDate) : endDate;

    const date = startObj.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Africa/Blantyre'
    });

    const timeRange = endObj ?
        `${startObj.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Africa/Blantyre'
        })} - ${typeof endObj !== "string" ? endObj.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Africa/Blantyre'
        }) : Object}` :
        `${startObj.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Africa/Blantyre'
        })} (CAT)`;

    return { date, timeRange, timeZone: 'CAT' };
};
