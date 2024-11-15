import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Calendar from '../DatePicker/Calendar';

// Utility functions
const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    dateViewCount: {
      control: { type: 'number', min: 1, max: 3 },
      description: 'Number of months to display',
    },
    defaultView: {
      control: { type: 'select', options: ['date', 'month', 'year'] },
      description: 'Initial view of the calendar',
    },
    enableHeaderLabel: {
      control: 'boolean',
      description: 'Enable clickable header labels for navigation',
    },
    firstDayOfWeek: {
      control: { type: 'select', options: ['monday', 'sunday'] },
      description: 'First day of the week',
    },
    hideOutOfMonthDates: {
      control: 'boolean',
      description: 'Hide dates from adjacent months',
    },
    hideWeekdays: {
      control: 'boolean',
      description: 'Hide weekday labels',
    },
    multipleSelection: {
      control: 'boolean',
      description: 'Enable multiple date selection',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// Basic Calendar with Single Selection
export const Basic: Story = {
  args: {
    dateViewCount: 1,
    enableHeaderLabel: true,
    firstDayOfWeek: 'monday',
  },
};

// Multiple Selection Calendar
const MultipleSelectionComponent = () => {
  const [selectedDates, setSelectedDates] = React.useState<Date[]>([]);
  
  return (
    <div className="space-y-4">
      <Calendar<true>
        multipleSelection={true}
        value={selectedDates}
        onChange={setSelectedDates}
        dateViewCount={1}
        enableHeaderLabel={true}
      />
      <div className="text-sm">
        <div>Selected dates: {selectedDates.length}</div>
        <div className="mt-2">
          {selectedDates.map((date, index) => (
            <div key={index}>{formatDate(date)}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const MultipleSelection: Story = {
  render: () => <MultipleSelectionComponent />
};




// Calendar with Custom Day Rendering
const CustomDayRenderingComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  
  const renderDay = (date: Date) => {
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isToday = new Date().toDateString() === date.toDateString();
    
    return (
      <div
        className={`
          p-2 relative
          ${isWeekend ? 'text-red-500' : ''}
          ${isToday ? 'font-bold' : ''}
        `}
      >
        {date.getDate()}
        {isToday && (
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
        )}
      </div>
    );
  };
  
  return (
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      renderDay={renderDay}
      dateViewCount={1}
      enableHeaderLabel={true}
    />
  );
};

export const CustomDayRendering: Story = {
  render: () => <CustomDayRenderingComponent />
};

// Calendar with Disabled Dates
const DisabledDatesComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  
  const disableDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const thirtyDaysFromNow = addDays(today, 30);
    return date < today || date > thirtyDaysFromNow;
  };
  
  return (
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      disableDate={disableDate}
      dateViewCount={1}
      enableHeaderLabel={true}
    />
  );
};

export const DisabledDates: Story = {
  render: () => <DisabledDatesComponent />
};

// Calendar with Custom Styling
const CustomStylingComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  
  const dayStyle = (date: Date) => {
    const day = date.getDay();
    if (day === 0 || day === 6) {
      return {
        color: '#FF5757',
        fontWeight: 'bold',
      };
    }
    return {};
  };
  
  return (
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      dayStyle={dayStyle}
      dateViewCount={1}
      enableHeaderLabel={true}
      className="border rounded-lg shadow-lg p-4 bg-gradient-to-br from-white to-gray-50"
    />
  );
};

export const CustomStyling: Story = {
  render: () => <CustomStylingComponent />
};

// Calendar with Different Views
const DifferentViewsComponent = () => {
  const [view, setView] = React.useState<'date' | 'month' | 'year'>('date');
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button 
          className={`px-3 py-1 rounded ${view === 'date' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('date')}
        >
          Date
        </button>
        <button 
          className={`px-3 py-1 rounded ${view === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('month')}
        >
          Month
        </button>
        <button 
          className={`px-3 py-1 rounded ${view === 'year' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setView('year')}
        >
          Year
        </button>
      </div>
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        defaultView={view}
        dateViewCount={1}
        enableHeaderLabel={true}
      />
      {selectedDate && (
        <div className="text-sm">
          Selected: {formatDate(selectedDate)}
        </div>
      )}
    </div>
  );
};

export const DifferentViews: Story = {
  render: () => <DifferentViewsComponent />
};

// Multiple Months View
export const MultipleMonths: Story = {
  args: {
    dateViewCount: 3,
    enableHeaderLabel: true,
    firstDayOfWeek: 'monday',
  },
};