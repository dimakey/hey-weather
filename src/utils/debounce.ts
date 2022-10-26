/*
debounce function
https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940?permalink_comment_id=3013161#gistcomment-3013161
 */

export const debounce = <F extends (...args: any) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: number = 0;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
