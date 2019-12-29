// This method can be used across the all test files
export const findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
};