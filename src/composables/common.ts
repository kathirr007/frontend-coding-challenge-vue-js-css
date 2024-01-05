// import app from '@/app';
import type { FullNameObject } from '@/types/common.type';

export function useVueFilters() {
  const titleCase = (str: string, splitter = ' ') => {
    if (!str) return '';
    let splitStr = str.toLowerCase().split(splitter);
    splitStr = splitStr.map(
      (item) => item.charAt(0).toUpperCase() + item.substring(1)
    );
    return splitStr.join(' ');
  };
  const fullName = (value: Partial<FullNameObject>) => {
    if (value) {
      if (value.firstName || value.lastName) {
        return `${value.firstName ? titleCase(value.firstName) : ''}${
          value.lastName ? ` ${titleCase(value.lastName)}` : ''
        }`;
      }
      if (value.email) {
        return `${value.email}`;
      }
    }

    return '';
  };

  const initials = (val: string) => {
    if (!val) return 'NA';
    const parts = val.split(' ');
    let initials = '';
    if (parts[0]) {
      initials += parts[0][0].toString().toUpperCase();
    }
    if (parts[1]) {
      initials += parts[1][0].toString().toUpperCase();
    }
    return initials;
  };

  const ISODatestringToDate = (dateString: string) => {
    if (dateString) {
      const date = new Date(dateString);
      return date as Date | Date[] | undefined;
    }
    return undefined;
  };

  const formatFileSize = (fileSize: number, precision = 2) => {
    const units = ['B', 'KB', 'MB', 'GB'];
    let index = 0;
    let formattedSize = fileSize;

    while (formattedSize >= 1 && index < units.length) {
      if (formattedSize < 1024) {
        break;
      }

      formattedSize /= 1024;
      index++;
    }

    return formattedSize.toFixed(precision) + ' ' + units[index];
  };

  return {
    titleCase,
    fullName,
    initials,
    ISODatestringToDate,
    formatFileSize,
  };
}
