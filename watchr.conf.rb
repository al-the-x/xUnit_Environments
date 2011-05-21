watch(/(\w+)\/(?:main|test)\.(js|py|php)$/) do |matches|
  changed, type, ext = matches.to_a
  
  command = {
      'php' => 'phpunit',
      'python' => 'python',
  }[type]
  
  test = "#{type}/test.#{ext}"
  
  system "clear && date && $(which #{command}) #{test}"
end
