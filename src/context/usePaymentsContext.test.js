import { renderHook, act } from '@testing-library/react-hooks';
import api from 'services/api';
import usePaymentsContext from './usePaymentsContext';

jest.mock('services/api');

const now = '2019-05-03T08:00:00.000Z';
const oneMinute = '2019-05-03T08:01:00.000Z';
const threeMinutes = '2019-05-03T08:03:00.000Z';
let mockDateNow;

describe('usePaymentsContext', () => {
  beforeEach(() => {
    api.fetchPayments.mockResolvedValue([
      {
        description: 'mock-description-1',
        id: 'mock-id-1',
      },
      {
        description: 'mock-description-2',
        id: 'mock-id-2',
      },
    ]);
    mockDateNow = jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() => new Date(now).valueOf());
  });

  afterEach(() => {
    jest.clearAllMocks();
    mockDateNow.mockRestore();
  });

  it('should call api on first call', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePaymentsContext()
    );

    act(() => {
      result.current.getPayments();
    });

    await waitForNextUpdate();

    expect(api.fetchPayments).toHaveBeenCalledTimes(1);
  });

  it('should call from memory within 2 minutes', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePaymentsContext()
    );

    act(() => {
      result.current.getPayments();
    });
    await waitForNextUpdate();

    mockDateNow = jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() => new Date(oneMinute).valueOf());

    act(() => {
      result.current.getPayments();
    });

    waitForNextUpdate();

    expect(api.fetchPayments).toHaveBeenCalledTimes(1);
  });

  it('should call from memory within 2 minutes', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      usePaymentsContext()
    );

    act(() => {
      result.current.getPayments();
    });
    await waitForNextUpdate();

    mockDateNow = jest
      .spyOn(global.Date, 'now')
      .mockImplementationOnce(() => new Date(threeMinutes).valueOf());

    act(() => {
      result.current.getPayments();
    });

    waitForNextUpdate();

    expect(api.fetchPayments).toHaveBeenCalledTimes(1);
  });
});
