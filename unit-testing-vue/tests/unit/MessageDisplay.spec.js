import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')
beforeEach(() => {
    jest.clearAllMocks()
})

describe('MessageDisplay', () => {
    it('Calls getMessage and displays message', async () => {
        // Mock the API call
        const mockMessage = 'Hello from the db!'
        getMessage.mockResolvedValueOnce({ text: mockMessage })
        const wrapper = mount(MessageDisplay)

        // Wait for promise to resolve
        await flushPromises()

        // Check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)

        // Check that component displays message
        const message = wrapper.find('[data-testid="message"]').text()
        expect(message).toEqual(mockMessage)
    })

    it('Displays an error when getMessage call fails', async () => {
        // Mock failed API call
        const mockError = 'Oops! Something went wrong'
        getMessage.mockRejectedValueOnce(mockError)
        const wrapper = mount(MessageDisplay)

        // Wait for promise to resolve
        await flushPromises()

        // Check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        
        // Check that component displays error
        const displayedError = wrapper.find('[data-testid="message-error"]').text()
        expect(displayedError).toEqual(mockError)
    })
})