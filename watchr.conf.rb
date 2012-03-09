watch(/(\w+)\/(?:main|test)\.(js|py|php|rb)$/) do |matches|
  changed, type, ext = matches.to_a

  command = {
      'php' => 'phpunit',
      'python' => 'python',
      'javascript' => 'js',
      'ruby' => 'rb',
  }[type]

  test = "#{type}/test.#{ext}"

  system "clear && date && $(which #{command}) #{test}"
end
